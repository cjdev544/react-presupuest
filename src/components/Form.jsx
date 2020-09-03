import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ( { setSpending, setCreateSpending } ) => {

    const [ name, setName ] = useState( '' )
    const [ quantity, setQuantity ] = useState( '' )
    const [ error, setError ] = useState( false )

    const saveQuantity = e => {
        if( !isNaN( parseInt( e.target.value ) ) ) {
            setQuantity( parseInt( e.target.value ) )
        } else { setQuantity( '' ) }
    }

    const saveSpending = e => {
        e.preventDefault()

        // Validate Spending
        if( quantity < 1 || quantity === '' || name.trim() === '' ) {
            setError( true )
            return
        }

        setError( false )

        // Create Spending
        const spending = {
            name,
            quantity,
            id: shortid.generate()
        }

        // Send Speding to the Principal Component
        setSpending( spending )
        setCreateSpending( true )

        // Reset Form
        setName( '' )
        setQuantity( '' )
    }

    return ( 
        <form
            onSubmit={ saveSpending }
        >
            {
                error
                ?
                <Error message="Ambos campos son obligatorios y el gasto debe ser mayor a 0" />
                : null
            }

            <h2>Agregar tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={ name }
                    onChange={ e => setName( e.target.value ) }
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={ quantity }
                    onChange={ saveQuantity }
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     )
}

Form.propTypes = {
    setSpending: PropTypes.func.isRequired,
    setCreateSpending: PropTypes.func.isRequired
}
 
export default Form