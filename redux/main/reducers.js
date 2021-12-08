import * as actions from './actionTypes'

const initialState = {
  data : [
  //   {
  //     "Name": "Facebook",
  //     "Title": "Facebook",
  //     "Domain": "facebook.com",
  //     "BreachDate": "2019-08-01",
  //     "AddedDate": "2021-04-04T03:20:45Z",
  //     "ModifiedDate": "2021-04-06T09:09:21Z",
  //     "PwnCount": 509458528,
  //     "Description": "In April 2021, <a href=\"https://www.bleepingcomputer.com/news/security/533-million-facebook-users-phone-numbers-leaked-on-hacker-forum/\" target=\"_blank\" rel=\"noopener\">a large data set of over 500 million Facebook users was made freely available for download</a>. Encompassing approximately 20% of Facebook's subscribers, the data was allegedly obtained by exploiting a vulnerability Facebook advises they rectified in August 2019. The primary value of the data is the association of phone numbers to identities; whilst each record included phone, only 2.5 million contained an email address. Most records contained names and genders with many also including dates of birth, location, relationship status and employer.",
  //     "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/Facebook.png",
  //     "DataClasses": [
  //         "Dates of birth",
  //         "Email addresses",
  //         "Employers",
  //         "Genders",
  //         "Geographic locations",
  //         "Names",
  //         "Phone numbers",
  //         "Relationship statuses"
  //     ],
  //     "IsVerified": true,
  //     "IsFabricated": false,
  //     "IsSensitive": false,
  //     "IsRetired": false,
  //     "IsSpamList": false
  // }
  ],
  pageActions : {
    modal : false,
    isPhone : true
  }
}

export const mainReducer = (state = initialState, {type, payload}) => {
  switch (type) { 
    case actions.SET_DATA :
      return {...state, data : payload.records}
    case actions.SET_PAGE_ACTIONS :
      return {...state, pageActions : payload.records}
    case actions.SET_DATA :
      return {...state, data : payload.records}
    default : 
      return state
  }
}