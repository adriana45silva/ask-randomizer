import store from '../store/store'

const FETCH_ASKS = 'FETCH_ASKS';
const FETCH_SINGLE_ASK = 'FETCH_SINGLE_ASK';
const MARK_QUESTION_AS_READED = 'MARK_QUESTION_AS_READED'
const GET_FILTERED_ASKS = 'GET_FILTERED_ASKS'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


export function fetchAsks(){
  return {
    type: FETCH_ASKS
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function fetchSingleAsk(){
  return {
    type: FETCH_SINGLE_ASK
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function getFilteredAsks(){
  // type: GET_FILTERED_ASKS
      return function (dispatch) {
        let foo;
        let a;

        let asks = store.getState().askReducer.asks

        let defer = new Promise((resolve, reject) => {
          foo = asks.filter( (item, index) => {
            if (!asks[index].read && !asks.length == 0 ){
              return asks[index];
            } else {
            }
          }) 
          foo.length > 0 ? resolve() : reject();
        });

        defer.then( () =>{
          dispatch({
            type: 'FETCH_SINGLE_ASK',
            asks: foo,
            currentQuestion: foo[Math.floor(Math.random() * foo.length)]
          });   

          dispatch({
            type: MARK_QUESTION_AS_READED
          });     
        });

        defer.catch( () => {
          dispatch({
            type: 'FETCH_SINGLE_ASK',
            asks: foo,
            currentQuestion: asks[Math.floor(Math.random() * foo.length)]
          });

          // dispatch({type: MARK_QUESTION_AS_READED});
        })
      }  
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function markQuestionAsReaded (){
    return {
      type: MARK_QUESTION_AS_READED
    }
}
