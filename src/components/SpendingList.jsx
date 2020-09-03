import React from 'react'
import PropTypes from 'prop-types'
import Spending from './Spending'

const SpendingList = ( { spendings } ) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            spendings.map( spending => (
                <Spending
                    key={ spending.id }
                    spending={ spending }
                />
            ))
        }
    </div>
)

SpendingList.propTypes = {
    spendings: PropTypes.array.isRequired
}
 
export default SpendingList