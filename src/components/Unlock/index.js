import {useState} from 'react'

import {BgContainer, Img, Para, Button} from './styledComponents'

const Unlock = () => {
  const [isLock, setIsLock] = useState(false)
  const onClickButton = () => {
    console.log('clicked')
    setIsLock(prevState => !prevState)
  }
  console.log(isLock)
  if (isLock === false) {
    return (
      <BgContainer>
        <Img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
        <Para>Your Device is Locked</Para>
        <Button type="button" onClick={onClickButton}>
          Unlock
        </Button>
      </BgContainer>
    )
  }
  return (
    <BgContainer>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        alt="unlock"
      />
      <Para>Your Device is Unlocked</Para>
      <Button type="button" onClick={onClickButton}>
        Lock
      </Button>
    </BgContainer>
  )
}

export default Unlock
