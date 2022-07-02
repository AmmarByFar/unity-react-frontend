import {useRef} from 'react';
import Button from '@mantine/core'

/** Empty login button, provides the base to build others from.
 * 
 * # Optional Props
 * 
 * - onClick: *function*; defines the onClick behavior of the button.  
 *    if not passed in, does nothing.
 * 
 * - className: *string*; Space seperated list of classes to add to this component.
 */
export function LoginButtonEmpty(props) {
    const defaultChildren = <div className="loginButtonText" >Empty Login Button</div>
    // if an `onClick` function was supplied, use it. else do nothing
    const ref = useRef(null);
    const onClick = typeof props.onClick === 'function' ?
        props.onClick :
        event => {
            event.nativeEvent.stopImmediatePropagation(); 
            event.stopPropagation();
            event.preventDefault();
        };
    return (
        <div ref={ref} className={['loginButton', props.className].join(' ')} onClick={onClick}>
            {props.children ?? defaultChildren}
        </div>
    );
}

/** Button to login as a guest, just removes the overlay.
 * 
 * # Required props
 * - setShowOverLay: *function*; the function to set the "showOverlay" state in App.
 */
export function LoginButtonGuest(props) {
    // if an `setShowOverlay` function was supplied, set it to false. else do nothing
    const onClick = typeof props.setShowOverlay === 'function' ?
        event => props.setShowOverlay(false) :
        null;
    return (
        <LoginButtonEmpty className="loginButtonGuest" onClick={onClick}>
            {/* Button Content here */}
            <div className="loginButtonText">Play as Guest.</div>
            <div>Play as a guest. Some features will not be available.</div>
        </LoginButtonEmpty>
    );
}

/** Button to connect wallet to app.
 * 
 * onClick function is ready to be defined below. Happy coding Ammar!
 */
export function LoginButtonConnetWallet(props) {

    const onClick = event => alert("Connect Wallet Clicked");
    
    return (
        <LoginButtonEmpty className="loginButtonConnetWallet" onClick={onClick}>
            {/* Button Content here */}
            <div className="loginButtonText">Connect Wallet</div>
            <div>Connect your crypto wallet for full experience.</div>
        </LoginButtonEmpty>
    );
}
export default LoginButtonEmpty
