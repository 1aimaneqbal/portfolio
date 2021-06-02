import React, {useEffect, useRef} from 'react'
import LandingAvatar from '../../images/LandingAvatar.png'
const Home = () => {
    const typingTextRef = useRef(null)
    const typingCursorRef = useRef(null)
    const blah = useRef(null)
    useEffect(() => {
        setTimeout(type, 5700)
    }, [])
    const textArray = ["Coding.", "Web Designing.", "Photoshopping.", "Creating Vectors.", "Playing Volleyball.", "Playing Badminton.", "eSports."]
    const typingDelay = 100
    const erasingDelay = 50
    const newTextDelay = 2000
    let textArrayIndex = 0
    let charIndex = 0
    const type = () =>{
        if(charIndex < textArray[textArrayIndex].length){
            if(!typingCursorRef.current.classList.contains("stopBlinking")){
                typingCursorRef.current.classList.add("stopBlinking")
            }
            typingTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex)
            charIndex++
            setTimeout(type, typingDelay)
        }
        else{
            typingCursorRef.current.classList.remove("stopBlinking")
            setTimeout(erase, newTextDelay)
        }
    }
    const erase = () =>{
        if(charIndex > 0){
            if(!typingCursorRef.current.classList.contains("stopBlinking")){
                typingCursorRef.current.classList.add("stopBlinking")
            }
            typingTextRef.current.textContent = textArray[textArrayIndex].substr(0, charIndex-1)
            charIndex--
            setTimeout(erase, erasingDelay)
        }
        else{
            typingCursorRef.current.classList.remove("stopBlinking")
            textArrayIndex++
            if(textArrayIndex >= textArray.length){
                textArrayIndex = 0
            }
            setTimeout(type, typingDelay + 1100)
        }
    }
    return (
        <div className="landingPage" id="home">
            <div className="typeText">
                <h2>Hi!<br/></h2>
                <h2>I'm Aiman Eqbal</h2>
                <p>I like <span className="typingText" ref={typingTextRef}></span><span className="typingCursor stopBlinking" ref={typingCursorRef}>&nbsp;</span></p>
            </div>
            <div className="avatar" ref={blah}>
                <img src={LandingAvatar} />
            </div>
        </div>
    )
}

export default Home
