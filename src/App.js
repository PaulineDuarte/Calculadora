
import Input from './components/Input'
import Button from './components/Button'
import { Container, Content , Row} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [FirstNumber , setFirstNumber] = useState('0'); 
  const [Operation, setOperation] = useState('');


  const handleClear=() => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };


  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ?'':prev}${num}` )
  }

  const handleSumNumbers = () => {

    if (FirstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(FirstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  const handleSubNumbers = () => {

    if (FirstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sub = Number(FirstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }

  }

  const handleMultNumber= () => {
    if (FirstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multi = Number(FirstNumber) * Number(currentNumber)
      setCurrentNumber(String(multi))
      setOperation('')
    }

  }


  const handleDivNumber= () => {
    if (FirstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const divide = Number(FirstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
    }

  }

  const handlePercentage = () => {
    if (FirstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('%')
    } else {
      const percentage = (Number(FirstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(percentage));
      setOperation('');
      }
    }; 
 
    const handleAddDecimal = () => {
      if (!currentNumber.includes('.')) { 
        setCurrentNumber((prev) => `${prev}.`);
      }
    };

    const handleBackspace = () => {
      setCurrentNumber((prev) => {
        if (prev.length > 1) {
          return prev.slice(0, -1); // Remove o último caractere
        }
        return '0'; // Retorna para '0' se só restar um caractere
      });
    };
    
  


  const handleEquals = () => {
    
    if (FirstNumber !=='0' && Operation !== '' && currentNumber !== '0'){
      switch (Operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
          handleSubNumbers();
          break;
          case '*':
          handleMultNumber();
          break;
          case '/':
          handleDivNumber();
          break;
          case '%':
          handlePercentage();
          break;
          case ',':
          handleAddDecimal();
          break;
          case '':
          handleBackspace();
          break;
          default:
            break;
      }
    }
  }




  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
        <Button label="c"  onClick={handleClear} isOperation={true}/>
        <Button label="%"  onClick={handlePercentage} isOperation={true}/>
        <Button label="⌫" onClick={handleBackspace} isOperation={true} isBackspace={true}/>
        <Button label="/"  onClick={handleDivNumber} isOperation={true}/>
        </Row>
        <Row>
        <Button label="7"  onClick={() => handleAddNumber('7')}/>
        <Button label="8"  onClick={() => handleAddNumber('8')}/>
        <Button label="9"  onClick={() => handleAddNumber('9')}/>
        <Button label="x"  onClick={handleMultNumber} isOperation={true}/>
        </Row>
        <Row>
        <Button label="4"  onClick={() => handleAddNumber('4')}/>
        <Button label="5"  onClick={() => handleAddNumber('5')}/>
        <Button label="6"  onClick={() => handleAddNumber('6')}/>
        <Button label="-"  onClick={handleSubNumbers} isOperation={true}/>
        </Row>
        <Row>
        <Button label="1"  onClick={() => handleAddNumber('1')} />
        <Button label="2"  onClick={() => handleAddNumber('2')}/>
        <Button label="3"  onClick={() => handleAddNumber('3')}/>
        <Button label="+"  onClick={handleSumNumbers} isOperation={true}/>
        </Row>
        <Row>
        <Button label="c"  onClick={handleClear}/>
        <Button label="0"  onClick={() => handleAddNumber('0')}/>
        <Button label="."  onClick={handleAddDecimal} />
        <Button label="="  onClick={handleEquals} isOperation={true}/>
     
        </Row>
      </Content>
    </Container>
  );

}

export default App;
