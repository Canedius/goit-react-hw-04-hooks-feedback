import {useState} from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Notification from './Notification/Notification'

export const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const addFedback = (e) =>{
      const name  = e.target.textContent.toLowerCase();
      switch (name) {
        case "good":
          setGood(good + 1 )
          break;
          case "neutral":
            setNeutral(neutral + 1 )
          break;
          case  "bad":
            setBad(bad + 1 )
            break;
        default: alert("ошибка")
         
      }
    }

   const countTotalFeedback = () =>{
     return good+neutral+bad  
    }
    const countPositiveFeedbackPercentage = total =>{
        return total?Math.round((good/total)*100) : 0
        
    }

        const total = countTotalFeedback()
        return (<div>
            <Section title="Please leave feedback">
                <FeedbackOptions  onLeaveFeedback={addFedback }  options={["Good","Neutral","Bad"]}/>
            </Section>
            <Section title="Statistics">
                {total > 0 ? <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad}
                total={countTotalFeedback} 
                positivePercentage={countPositiveFeedbackPercentage}/>:
                <Notification message="There is no feedback"/>}
                
            </Section>
</div>)
  
}

