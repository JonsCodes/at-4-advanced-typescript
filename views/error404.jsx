const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p> Oops, Sorry, we can't find this page!</p>
        <div>
        <img src="/images/Error.jpg" alt="Wrong page but it wasnt us."/>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404