import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ( { setPresupuest, setRemaining, setShowQuestion } ) => {

    const [ quantity, setQuantity ] = useState( 0 )
    const [ error, setError ] = useState( false )

    const readQuantity = e => {
        setQuantity( parseInt( e.target.value, 10 ) )
    }

    const saveQuantity = e => {
        e.preventDefault()

        if( quantity < 1 || isNaN( quantity ) ) {
            setError( true )
            return
        }

        setPresupuest( quantity )
        setRemaining( quantity )
        setShowQuestion( false )
        setError( false )
    }

    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>

            { 
                error 
                    ?
                    <Error 
                        message="El Presupuuesto debe ser Mayor a 1"
                    />
                    : null

            }

            <form
                onSubmit={ saveQuantity }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder={ 0 }
                    onChange={ readQuantity }
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
     )
}

Question.propTypes = {
    setPresupuest: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}
 
export default Question