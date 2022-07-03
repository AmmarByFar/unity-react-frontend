import {useRef} from 'react';
import {Button} from '@mantine/core'

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
    const defaultChildren = <Button>Empty Login Button</Button>
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
        <div style={{width: 350}}>
            <Button color="violet" size="xl" uppercase fullWidth ref={ref} onClick={onClick}>
                {props.children ?? defaultChildren}
            </Button>
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
        <div style={{width: 350}}>
            <Button variant='light' color="violet" size="xl" uppercase fullWidth onClick={onClick}>
                <div>Play as Guest</div>
            </Button>
        </div>
        // <LoginButtonEmpty onClick={onClick}>
        //     {/* Button Content here */}
        //     <div className="loginButtonText">Play as Guest.</div>
        // </LoginButtonEmpty>
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
        </LoginButtonEmpty>
    );
}
export default LoginButtonEmpty
