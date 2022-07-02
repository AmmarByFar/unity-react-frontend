/** Empty login button, provides the base to build others from.
 * 
 * # Required Props
 * 
 * - onClick: *function*; defines the onClick behavior of the button.  
 *    Component will still render correctly without this, a button that does nothing
 *    is just kinda pointless.
 * 
 * # Optional Props
 * 
 * - className: *string*; Space seperated list of classes to add to this component.
 * 
 */

import {useRef} from 'react';

export function LoginButtonEmpty(props) {
    const defaultChildren = <div className="loginButtonText" >Empty Login Button</div>
    // if an `onClick` function was supplied, use it. else do nothing
    const ref = useRef(null);
    const onClick = typeof props.onClick === 'function' ?
        props.onClick :
        event => {
            event.stopPropagation();
            event.stopImmediatePropagation(); 
            event.preventDefault();
        };
    return (
        <div ref={ref} className={['loginButton', props.className].join(' ')} onClick={onClick}>
            {props.children ?? defaultChildren}
        </div>
    );
}

export function LoginButtonGuest(props) {
    // if an `setShowOverlay` function was supplied, set it to false. else do nothing
    const onClick = typeof props.setShowOverlay === 'function' ?
        event => props.setShowOverlay(false) :
        null;
    return (
        <LoginButtonEmpty className="loginButtonGuest" onClick={onClick}>
            <div className="loginButtonText">Play as Guest.</div>
        </LoginButtonEmpty>
    );
}

export function LoginButtonConnetWallet(props) {
    const onClick = event => alert("Connect Wallet Clicked");
    return (
        <LoginButtonEmpty className="loginButtonConnetWallet" onClick={onClick}>
            <div className="loginButtonText">Connect Wallet</div>
        </LoginButtonEmpty>
    );
}
export default LoginButtonEmpty
