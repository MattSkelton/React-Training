import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    console.log(course.parts)
    return(
        <div>
            <Header name = {course.name}/>
            <div>
                <Content parts = {course.parts}/>
            </div>
        </div>
    )
}

export default Course