// import Feedback from './Feedback/feedback'

// export const App = () => {
//   return (
//     <div>
//     <Feedback/>
//     </div>
//   );
// };
import React from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Notification from './Notification/Notification'

export class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


    addFedback = (e) =>{
      const name  = e.target.textContent.toLowerCase();
      this.setState(prevState =>{
        return {
        [name] : prevState[name] + 1
        }
      })
    }



    countTotalFeedback = () =>{
       return Object.values(this.state).reduce((previousValue, number) => {
            return previousValue + number;
          },0)
        
    }
    countPositiveFeedbackPercentage = total =>{
        return total?Math.round((this.state.good/total)*100) : 0
        
    }


    render(){
        const total = this.countTotalFeedback()
        return (<div>
            <Section title="Please leave feedback">
                <FeedbackOptions  onLeaveFeedback={this.addFedback }  options={this.state}/>
            </Section>
            <Section title="Statistics">
                {total > 0 ? <Statistics 
                good={this.state.good} 
                neutral={this.state.neutral} 
                bad={this.state.bad}
                total={this.countTotalFeedback} 
                positivePercentage={this.countPositiveFeedbackPercentage}/>:
                <Notification message="There is no feedback"/>}
                
            </Section>
</div>)
    }
}

