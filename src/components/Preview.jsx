import React, { useContext } from 'react'
import PreviewItem from './PreviewItem'
import { stepsContext } from '../context/stepsContext'
import data from '../datas/dataStep1.json'

const Preview = () => {
    const {state}=useContext(stepsContext)
    let som=0

    const getPrice=(arr, val)=>{
        const price = arr.filter(el=>el.label===val)[0].price        
        som+=parseInt(price.replace(/[+$]/g,''))
        return price
    }   

  return (
    <div className='preview'>
        <div className="preview-details">
          {
            <>
              <PreviewItem  title={`${state.step2.abonment}(${state.step2.plan})`}
                            price={getPrice(data.content[1][state.step2.plan],state.step2.abonment)}      
                            change={'/step2'}
              />
              {
                  state.step3.map((el, index) => 
                                        <PreviewItem key={index}
                                                     title={el} 
                                                     price={getPrice(data.content[2],el)}
                                                     change={'/step3'}

                  />)
              }
            </>
          }
        </div>
        <div className="total">
            <span className='title'>total per month</span>
            <span className="amount">{`+$${som}/${state.step2.plan==='monthly'?'mo':'yr'}`}</span>
        </div>
    </div>
  )
}

export default Preview