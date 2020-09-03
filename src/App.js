import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import SpendingList from './components/SpendingList'
import PresupuestControl from './components/PresupuestControl'

function App() {

  // States
  const [ showQuestion, setShowQuestion ] = useState( true )
  const [ presupuest, setPresupuest ] = useState ( 0 )
  const [ remaining, setRemaining ] = useState( 0 )
  const [ spending, setSpending ] = useState( {} )
  const [ spendings, setSpendings ] = useState( [] )
  const [ createSpending, setCreateSpending ] = useState( false )

  // useEffect
  useEffect( () => {
    if( createSpending ) {
      setSpendings([
        ...spendings,
        spending
      ])
  
      const remainingPresupuest = remaining - spending.quantity
      setRemaining( remainingPresupuest )

      setCreateSpending( false )
    }
  }, [ spending, createSpending, remaining, spendings ])

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          {
            showQuestion
            ?
            (
              <Question 
                setPresupuest={ setPresupuest }
                setRemaining={ setRemaining }
                setShowQuestion={ setShowQuestion }
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                    <Form 
                      setSpending={ setSpending }
                      setCreateSpending={ setCreateSpending }
                    />
                </div>
                <div className="one-half column">
                    <SpendingList
                      spendings={ spendings }
                    />
                    <PresupuestControl
                      presupuest={ presupuest }
                      remaining={ remaining }
                    />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
