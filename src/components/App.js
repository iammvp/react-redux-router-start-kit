import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import actions
import * as Actions from '../redux/actions/actionCreators'

//inport main component
import Main from './Main'



//states to props
function mapStateToProps(state){
  return state
}

//dispatch to props

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions,dispatch)
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
