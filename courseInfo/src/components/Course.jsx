import Header from './Header'
import Content from './Content'
import Total from './Total'
const Course = ({name, parts}) => {
    return(
        <div>
            <Header name = {name}/>
            <div>
                <Content parts = {parts}/>
            </div>
            <Total parts = {parts}/>
        </div>
    )
}

export default Course