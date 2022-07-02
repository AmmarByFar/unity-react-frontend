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

export function LoginButtonEmpty(props) {
    const defaultChildren = <div className="loginButtonText" >Empty Login Button</div>
    return (
        <div className={['loginButton', props.className].join(' ')} onClick={props.onClick ?? ""}>
            {props.children ?? defaultChildren}
        </div>
    );
}

export function LoginButtonGuest(props) {
    // if an `setShowOverlay` function was supplied, set it to false. else do nothing
    const onClick = event => typeof props.setShowOverLay === 'function' ?
        props.setShowOverLay(false) :
        '' ;
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
