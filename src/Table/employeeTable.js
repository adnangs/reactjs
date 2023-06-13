import React from 'react'
import Table from './Table'

function employeeTable() {
    const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
    return (
        <div>
            <section className="section">
              <div className="container">
                <h1 className="title">
                  Hello, React!</h1>                   
                    <Table characterData={characters} />
              </div>
          </section>
        </div>
   
   )
}

export default employeeTable
