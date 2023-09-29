import "./layout.css";

import p1 from "../image/image-confetti.jpg";
import p2 from "../image/image-restaurant.jpg";
import p3 from "../image/image-plane.jpg";
import p4 from "../image/image-currency.jpg";

function Layout() {
	return (
		<div className='head1'>
			<div className='headcont'>
				<div className='headSec-1'>
					<h1>Latest Article</h1>
				</div>
				<div className='headSec-22'>
					<div className='headColl'>
						<img src={p4} alt='money' />
						<p className='sm12'>By Claire Robinson</p>
						<h4>Recieve money in any currency with no fees</h4>
						<p className='sm14'>
							The world is getting smaller and we're becoming more mobile. So
							why should we be forced to only recieve money in a single...
						</p>
					</div>
					<div className='headColl'>
						<img src={p2} alt='money' />
						<p className='sm12'>By Willson Button</p>
						<h4>Treat yourself without worrying about money</h4>
						<p className='sm14'>
							Our simple budgeting features allows you to seperate out your
							spending and set realistic limits each month. that means you...
						</p>
					</div>
					<div className='headColl'>
						<img src={p3} alt='money' />
						<p className='sm12'>By Willson Button</p>
						<h4>Take your EasyBank card wherever you go</h4>
						<p className='sm14'>
							We want you to enjoy your travels. This is why we dont charge any
							fees on purchase while you're aboard. We'll even show you...
						</p>
					</div>
					<div className='headColl'>
						<img src={p1} alt='money' />
						<p className='sm12'>By Claire Robinson</p>
						<h4>Our invite-Only Beta accounts are now live!</h4>
						<p className='sm14'>
							After alot of hardwork by the whole team, we are excited to launch
							our closed beta. It's easy to request an invite through the
							site...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;
