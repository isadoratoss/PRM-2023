import { Box } from "@mui/material"
import HeaderProfile from "../../components/HeaderProfile"
import TopicList from "../../components/TopicList"

function TopicPage (){
    const profile = {
        fullname: 'Isadora P Toss',
        username: 'IsaToss',
        description: 'Isso é um teste',
        createdAt: '2022-08-13'
    }

    const topics = [
        {
            owner: {fullname: 'Pedro da Silva'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-15 19:23:00'
        }, {
            owner: {fullname: 'Marina da Silva'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 12,
            reposts: 2,
            likes: 300,
            createdAt: '2023-08-15 19:23:00'
        }, {
            owner: {fullname: 'Lula da Silva'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 0,
            reposts: 0,
            likes: 3,
            createdAt: '2023-08-16 19:22:00'
        }, {
            owner: {fullname: 'João Oliveira'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 5,
            reposts: 15,
            likes: 50,
            createdAt: '2023-08-22 19:20:00'
        }, {
            owner: {fullname: 'Renato da Silveira'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 1,
            reposts: 25,
            likes: 70,
            createdAt: '2023-08-11 19:21:00'
        }, {
            owner: {fullname: 'Neymar Junior'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor culpa tenetur aut tempora nam accusamus molestiae earum, est ipsum, distinctio consequatur? Atque, quibusdam. Cumque suscipit architecto cupiditate consequuntur sunt?',
            comments: 500,
            reposts: 150,
            likes: 3000,
            createdAt: '2023-08-12 19:13:00'
        }
    ]
    
    return(
        <Box id="topic-page" display="flex" flexDirection="column"
        alignItems="center" gap={3}>
            
        <HeaderProfile user={profile}/>

        <TopicList items={topics} />

        </Box>
    )
}
export default TopicPage