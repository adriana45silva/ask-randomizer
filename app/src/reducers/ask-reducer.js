function askReducer (state = {
  asks: [
      {
        ask: `Tell me about something you regret having not done. Why haven’t you done it?`,
        read: false
      }, {
        ask: `Is there anything you regret having not told someone? Why haven’t you told them?`,
        read: false
      }, {
        ask: `Tell me about someone who has been kind to you. What made them so kind?`,
        read: false
      }, {
        ask: `Besides your closest family members, share with me some things you’re most grateful for.`,
        read: false
      }, {
        ask: `Tell me some of the important life lessons you have learned. How did you learn them?`,
        read: false
      }, {
        ask: `Which people most influenced your life personally? Professionally? Share examples of how they impacted you.`,
        read: false
      }, {
        ask: `If you were to die suddenly this evening, what would you most regret having not told someone? Why haven’t you told them yet?`,
        read: false
      }, {
        ask: `What have you accomplished so far—personally and professionally—that makes you proudest? Why?`,
        read: false
      }, {
        ask: `Share with me memories of times when things were difficult for you.`,
        read: false
      }, {
        ask: `Tell me about a time in your life when things were not going your way. How were you able to persevere? How did things get better?`,
        read: false
      }, {
        ask: `How has your life been different than how you once imagined it would be?`,
        read: false
      }, {
        ask: `Tell me how you would like people to remember you.`,
        read: false
      }, {
        ask: `Do you have any regrets you’d like to share?`,
        read: false
      }, {
        ask: `Imagining your life years into the future, what do you see?`,
        read: false
      }, {
        ask: `Thinking about your family many generations from now, and knowing that they may hear this recording, is there wisdom or advice you would like to share with them?`,
        read: false
      }, {
        ask: `Can you tell me about someone who had a big influence on you life? Would you tell me about some of the most important lessons that person taught you?`,
        read: false
      }
    ],
    currentQuestion: null,
    readedQuestion: null
}, action) {
  switch (action.type) {
    case "FETCH_ASKS":{
      return{
        ...state,
        asks: state.asks
      }
    }
    case "GET_FILTERED_ASK":
      return function (dispatch) {
      //   // let foo;

      //   let defer = new Promise((resolve, reject) => {
      //    state.asks.filter( (index, item) => {
      //       if (!state.asks[item].read){
      //         return resolve(!state.asks[item].read);
      //       }
      //     })          
      //   });

      //   defer.then( (data) =>{
      //     foo = data;
      //   });

      //   dispatch({
      //     type: 'FETCH_SINGLE_ASK',
      //     asks: foo,
      //     currentQuestion: state.asks[Math.ceil(Math.random() * state.asks.length - 1)]
      //   });

      //   // return defer;
      }
    break;
    case "FETCH_SINGLE_ASK":{
      return {
        ...state,
        asks: action.asks,
        currentQuestion: action.currentQuestion
        // asks: state.asks.filter( (index, item) => {
        //   if (!state.asks[item].read){
        //     return !state.asks[item].read
        //   }
        // }),
        // currentQuestion: state.asks[Math.ceil(Math.random() * state.asks.length - 1)]
      }
    }
    case "MARK_QUESTION_AS_READED":
      return {
        ...state,
        readedQuestion: state.currentQuestion.read = true 
      }
    default:
      return state;
  }
  

}

export default askReducer;