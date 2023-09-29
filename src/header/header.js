import "./header.css";
import px1 from "../image/icon-api.svg";
import px2 from "../image/icon-onboarding.svg";
import px3 from "../image/icon-online.svg";
import px4 from "../image/icon-budgeting.svg";

function Header() {
	return (
		<div className='head'>
			<div className='headcont'>
				<div className='headSec-1'>
					<h1>Why choose EasyBank?</h1>
					<p>
						We leverage Open banking to turn your bank into financial hub.
						Control your finances like never before.
					</p>
				</div>
				<div className='headSec-2'>
					<div className='headCol'>
						<img src={px3} alt='bigpix' />
						<h3>Online Banking</h3>
						<p>
							Our mordern web and mobile applications allow you to keep track of
							your finances wherever you are in the world
						</p>
					</div>
					<div className='headCol'>
						<img src={px4} alt='bigpix' />
						<h3>Simple budgeting</h3>
						<p>
							See exactly wherever your money goes each month. Recieve
							notifications when you're close of hitting yor limits.
						</p>
					</div>
					<div className='headCol'>
						<img src={px2} alt='bigpix' />
						<h3>Fast boarding</h3>
						<p>
							We don't do branches. Open your account in minutes online and
							start taking control of your finances right way.
						</p>
					</div>
					<div className='headCol'>
						<img src={px1} alt='bigpix' />
						<h3>Open AI</h3>
						<p>
							Manage your savings, investemnt, pensions, and much more from one
							account. Tracking your money has never been easier.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
