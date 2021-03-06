import React from 'react';
import reducer from 'javascripts/reducers/ask-reducer';
import store from 'javascripts/store/store';
import AskItem from 'javascripts/modules/ask-item.jsx';
import {fetchSingleAsk, markQuestionAsReaded, getFilteredAsks} from 'javascripts/actions/ask-actions';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class AskComponent extends React.Component {
  constructor( props ){
    super(props);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentWillMount(){
    this.props.getFilteredAsks();
  }

  componentDidUpdate(){ 
    this.shuffleText()
  }

  componentDidMount(){
    this.getQuestions();
  }

  shuffleText(){
    var container = $("#ask");
    var userText = $('h1');

    container.shuffleLetters();
  }

  addEvents(){
    if (this.props.asks.length == 0){
      document.body.removeEventListener('click', this.addEvents.bind(this), false);
      document.body.removeEventListener('keypress', this.addEvents.bind(this), false);
    } else {
      this.props.getFilteredAsks();
    }
  }

  getQuestions(){
    document.body.addEventListener('keypress',  this.addEvents.bind(this));
    document.body.addEventListener('click',  this.addEvents.bind(this));  
  }

  renderQuestions (item){
    return (
      <ReactCSSTransitionGroup 
        component="div"
        transitionName="ask" 
        transitionEnter={true}
        transitionAppearTimeout={500}          
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={500}
      >
      {
        this.props.asks.length > 0 ? (<h1 key={this.props.asks.length} id="ask">{item}</h1>) : (<h1 key={this.props.asks.length}>Thanks ;)</h1>)
      }
      </ReactCSSTransitionGroup>    
    )
  }
	



  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render(){
    return (
      <div className="ask-container">
        {
          this.props.currentQuestion && this.props.asks.length > 0 ? this.renderQuestions(this.props.currentQuestion.ask) : <div><h1 key={this.props.asks.length}>Thanks ;)</h1></div>
        }
      </div>
    );
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const mapStateToProps = (state) => {
  return {
    currentQuestion: state.askReducer.currentQuestion,
    asks: state.askReducer.asks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSingleAsk: fetchSingleAsk,
    markQuestionAsReaded: markQuestionAsReaded,
    getFilteredAsks: getFilteredAsks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AskComponent);
