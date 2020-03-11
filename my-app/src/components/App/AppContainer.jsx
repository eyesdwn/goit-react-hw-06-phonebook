import { connect } from 'react-redux'
import {
  updateFilter,
  saveContact,
  deleteContact
} from '../../redux/phoneBookActions'
import App from './App'

const mapStateToProps = state => ({
  filter: state.filter,
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
  saveContact: contact => dispatch(saveContact(contact)),
  deleteContact: contact => dispatch(deleteContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
