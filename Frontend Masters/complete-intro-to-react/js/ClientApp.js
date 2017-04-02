import React from 'react'
import { render } from 'react-dom'
import MyTitle from './MyTitle'


var myFirstComponent = React.createClass({
  render: function () {
    return (
			<div>
				<MyTitle title='props are the best' color='blue' />
				<MyTitle title='semiocolons are the worst' color='rebeccapurple' />
				<MyTitle title='jk im out of ideas' color='darkvioletred' />
			</div>
    )
  }
})

render(React.createElement(myFirstComponent), document.getElementById('app'))