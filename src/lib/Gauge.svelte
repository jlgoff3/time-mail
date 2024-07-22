<script>
	import { ESCAPE_ROOM_DURATION, remainingTime } from './store/timer';
</script>

<div class="toggle-container">
	<div class="toggle-container-inner">
		<div class="toggle-container-inner-ticks">
			<div class="toggle-container-inner-ticks-cover"></div>
			<div class="toggle-container-inner-ticks-container">
				<div class="tick big e">E</div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick big m">
					<small>1</small>/<small>2</small>
				</div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick"></div>
				<div class="tick big f">F</div>
			</div>
			<div
				class="toggle-container-inner-ticks-indicator"
				style={'margin-left:' + (200 * $remainingTime) / ESCAPE_ROOM_DURATION + 'px;'}
			></div>
		</div>
	</div>
</div>

<style>
	.toggle-container {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 540px;
		height: 240px;
		box-shadow:
			0px 0px 54px -6px rgba(0, 0, 0, 0.75),
			inset 0px 0px 36px 10px rgba(0, 0, 0, 0.75);
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.toggle-container-inner {
		box-shadow: inset 0px 0px 140px 30px rgba(0, 0, 0, 0.5);
		background-color: #101010;
		width: 480px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.toggle-container-inner-ticks {
		box-shadow:
			inset 0px 0px 40px 20px rgba(0, 0, 0, 0.75),
			inset 0px 50px 52px -52px rgba(236, 236, 236, 0.5);
		background-color: #080808;
		display: flex;
		padding: 20px 60px;
		position: relative;
	}
	.toggle-container-inner-ticks-cover {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.05);
	}
	.toggle-container-inner-ticks-container {
		display: flex;
	}
	.toggle-container-inner-ticks-container .tick {
		color: white;
		width: 20px;
	}
	.toggle-container-inner-ticks-container .tick::after {
		content: ' ';
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		width: 4px;
		height: 20px;
		background: #8b8b8b;
		position: absoulute;
	}
	.toggle-container-inner-ticks-container .tick.big {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}
	.toggle-container-inner-ticks-container .tick.big::after {
		height: 30px;
		margin-top: 20px;
	}
	.toggle-container-inner-ticks-container .tick.big small {
		font-size: 16px;
		font-weight: normal;
	}
	.toggle-container-inner-ticks-container .tick.e {
		color: #cb3a3a;
	}
	.toggle-container-inner-ticks-container .tick.f {
		color: #03c703;
	}
	.toggle-container-inner-ticks-indicator {
		width: 20px;
		display: block;
		top: 0;
		bottom: 0;
		position: absolute;
		margin-left: 0px;
		transition: all 1.8s ease;
		background-color: rgba(250, 22, 22, 0.3);
	}
</style>
