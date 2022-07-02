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
    return (
        <div className={['loginButton', props.className].join(' ')} onClick={props.onClick ?? ""}>
            
        </div>
    );
}

export function LoginButtonGuest(props) {
    const onClick = (e) => alert("LoginButtonGuest clicked");
    return (
        <div className={['loginButton', props.className].join(' ')} onClick={props.onClick ?? ""}>
            
        </div>
    );
}

export function LoginButtonConnetWallet(props) {
    const onClick = (e) => alert("LoginButtonConnetWallet clicked");
    return (
        <div className={['loginButton', props.className].join(' ')} onClick={props.onClick ?? ""}>
            
        </div>
    );
}
export default LoginButtonEmpty
