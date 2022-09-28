import { LightbulbOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Light = styled(LightbulbOutlined)`
    font-size: 130px;
    color: #e6e6e6;
`
const Text = styled(Typography)`
    margin-top: 20px;
    font-size: 24px;
    color: #80868b;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
`

const EmptyNotes = () => {
    return (
        <Container>
            <Light />
            <Text>Здесь будут ваши заметки.</Text>
        </Container>
    )
}

export default EmptyNotes