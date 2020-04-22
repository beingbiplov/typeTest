import React, {Component} from 'react';
import Preview from './Preview'
import Speed from './Speed'
import GetText from './GetText'
import Header from './Header'
import Result from './Result'

const initialState = {
  text : GetText().quote,
  text_author : GetText().author,
  userInput : '',
  symbols : 0,
  sec : 0,
  started : false,
  finished : false
}

class App extends Component {
  state = initialState

  onRestart = () => {
    this.setState(initialState)
  }

  

  onUserInpitChange = (e) => {
    const v = e.target.value;
    this.setTimer()
    this.onFinish(v)
    this.setState({
      userInput : v,
      symbols : this.countCorrectSymbols(v),
      
    })

  }

 

  countCorrectSymbols(userInput){
    const text = this.state.text.replace(' ', '')
    return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length
  }

  setTimer(){
    if (!this.state.started){
      this.setState({ started: true })
      this.interval  = setInterval(() => {
        this.setState(prevProps => {
          return { sec : prevProps.sec +1 }
        })
      }, 1000)
    }
  }

  onFinish(userInput){
    if (userInput === this.state.text){
      clearInterval(this.interval)
      this.setState({
        finished : true
      })
    }
  }

  render(){
    return (
      <div className="card container mb-5">
      <Header />
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
          <Preview text={this.state.text} userInput={this.state.userInput} />
          <textarea
            value={this.state.userInput}
            onChange = {this.onUserInpitChange}
            className='form-control mb-3'
            placeholder='Start Typing'
            readOnly = {this.state.finished}
          ></textarea>
          <Speed symbols = {this.state.symbols} sec = {this.state.sec} finished={this.state.finished} />
            <Result symbols = {this.state.symbols} sec = {this.state.sec} finished={this.state.finished} text_author={this.state.text_author} totalUserInput = {this.totalUserInput} />
            <div className='text-right'>
              <button className='btn btn-success' onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>
      </div>
  )

  }
  
}

export default App;
