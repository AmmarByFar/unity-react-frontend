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

export default function LoginButtonEmpty(props) {
    return (
        <div className={['loginButton', props.className].join(' ')} onClick={props.onClick ?? ""}>
            
        </div>
    );
}

