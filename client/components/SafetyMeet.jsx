import React from 'react'

// class SafetyForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: 0,
//             Attendees: '',
//             location: '',
//             discussion: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleChange(event) {
//         this.setState({value: event.target.name})
//     }
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Safety Meeting</h1>
//             </div>
//             <form onSubmit={this.handleSubmit}>
//                 <div class="field">
//                     <div class="control">
//                         <div class="select">
//                             <label className="label">Attendees:</label>
//                             <select>
//                                 <option>Select dropdown</option>
//                                 <option>With options</option>                         
//                             </select>
//                                 <label class="label">Date & Time</label>
//                                     <div class="control">
//                                         <input class="input" type="text" placeholder="Text input" />
//                                     </div>
//                                     <label class="label">Location</label>
//                                         <div class="control">
//                                             <input class="input" type="text" placeholder="Text input" />
//                                         </div>
//                                         <label class="label">Discussion/Topics</label>
//                                          <p>HSE concerns, recent incidents, internal & external auditing results, training needs etc</p>
//                                             <div class="control">
//                                                 <textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
//                                             </div>
//                                             <div class="field is-grouped is-grouped-right">
//                                                 <p class="control">
//                                                     <a class="button is-primary">
//                                                     Submit
//                                                     </a>
//                                                 </p>
//                                                 <p class="control">
//                                                     <a class="button is-light">
//                                                     Cancel
//                                                     </a>
//                                                 </p>
//                                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
        
//         )
//     }
// }


// const SafetyMeet = (props) => (
//         <div>
//             <h1>
//                 I am a safety meeting
//             </h1>
//         </div>

// )


    
//export default SafetyMeet