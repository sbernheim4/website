import React from "react";
import './projects.scss';

export default function Projects() {

	return (
		<section className="projects">

			<div className="projects--header">
				<h1>Projects</h1>
				<h2>I've worked on some pretty fun side projects, each helping me explore a new framework, technology, or platform.</h2>
			</div>

			<div className="projects__container">

				<div className='projects__container__project one'>
					<div className='budgeteer'>
						<h2>Budgeteer</h2>
					</div>
				</div>

				<div className='projects__container__project two'>
					<div className='weatherterm'>
						<h2>Weatherterm</h2>
					</div>
				</div>

				<div className='projects__container__project three'>
					<div className='m5systems'>
						<h2>M5Systems</h2>
					</div>
				</div>

				<div className='projects__container__project four'>
					<div className='kinetic'>
						<h2>Kinetic Global</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
