import React from 'react'

const Form = ({submithandler}) => {
    return (
        <div className="formDiv">
            <form onSubmit={(e)=>submithandler(e)}>
                <input type="text" name="text" /><input type="submit" value="Add todo"/>
            </form>            
        </div>
    )
}

export default Form
