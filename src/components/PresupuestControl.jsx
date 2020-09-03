import React from 'react'
import PropTypes from 'prop-types'
import { checkPresupuest } from '../helpers'

const PresupuestControl = ( { presupuest, remaining } ) => (
    <>
        <div className="alert alert-primary">
            Presupuesto: $ { presupuest }
        </div>
        <div className={ checkPresupuest( presupuest, remaining ) }>
            Restante: $ { remaining }
        </div>
    </>
)

PresupuestControl.propTypes = {
    presupuest: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
 
export default PresupuestControl