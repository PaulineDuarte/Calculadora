
import Input from './components/Input'
import Button from './components/Button'
import { Container, Content , Row, Column} from './styles';

const App = () => {
  return (
    <Container>
      <Content>
        <Input/>
        <Row>
        <Button label="1"/>
        <Button/>
        <Button/>
        <Button/>
        </Row>
        <Row>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        </Row>
        <Row>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
