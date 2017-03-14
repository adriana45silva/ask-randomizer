const FETCH_ASKS = 'FETCH_ASKS';
const FETCH_SINGLE_ASK = 'FETCH_SINGLE_ASK';
const MARK_QUESTION_AS_READED = 'MARK_QUESTION_AS_READED'

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

export function markQuestionAsReaded (){
    return {
      type: MARK_QUESTION_AS_READED
    }
}
