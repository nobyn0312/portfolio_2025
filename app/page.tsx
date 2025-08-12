import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='text-xl font-bold text-gray-900'>Portfolio</div>
						<div className='hidden md:flex space-x-8'>
							<a
								href='#top'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								TOP
							</a>
							<a
								href='#about'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								ABOUT
							</a>
							<a
								href='#works'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								WORKS
							</a>
							<a
								href='#contact'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								CONTACT
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* TOP Section */}
			<section
				id='top'
				className='pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white'
			>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
							Welcome to My
							<span className='text-orange-500'> Portfolio</span>
						</h1>
						<p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
							Creative developer passionate about building beautiful and
							functional web experiences
						</p>
						<a
							href='#works'
							className='inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'
						>
							View My Work
						</a>
					</div>
				</div>
			</section>

			{/* ABOUT Section */}
			<section id='about' className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							ABOUT
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
								Who I Am
							</h3>
							<p className='text-gray-600 mb-6 leading-relaxed'>
								小さい頃からピアノ漬けで音楽高校・音楽大学に進学
								音楽の仕事が無くて絶望。
								教員、販売員などを経て、webデザインと出会い、、忘れていたものづくりへの情熱を取り戻す。
								webコーダーからはじめ、現在はNext.jsをメインにフロントエンジニアのような事をやっています。
							</p>
							<p className='text-gray-600 leading-relaxed'>
								{/* My approach combines technical excellence with creative
								problem-solving, ensuring every project not only meets but
								exceeds expectations. */}
							</p>
						</div>
						<div className='bg-orange-50 p-8 rounded-lg'>
							<h4 className='text-xl font-semibold text-gray-900 mb-4'>
								Skills
							</h4>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700'>Frontend Development</span>
									<div className='w-32 h-2 bg-gray-200 rounded-full'>
										<div className='w-24 h-2 bg-orange-500 rounded-full'></div>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700'>UI/UX Design</span>
									<div className='w-32 h-2 bg-gray-200 rounded-full'>
										<div className='w-20 h-2 bg-orange-500 rounded-full'></div>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700'>Backend Development</span>
									<div className='w-32 h-2 bg-gray-200 rounded-full'>
										<div className='w-28 h-2 bg-orange-500 rounded-full'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WORKS Section */}
			<section id='works' className='py-16 bg-gray-50'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							WORKS
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>

					{/* Website Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Website
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Website Work Item 1 */}
							<Link
								href='https://issun-app.vercel.app/top'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/issun_top.png'
										alt='低身長向けファッションアプリ'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										低身長向けファッションアプリ
									</h3>
									<p className='text-gray-600 mb-4'>
										ZOZOTOWNやユニクロなどから、低身長でも似合う服が集まるwebサービスを作りたかった。口コミの投稿なども出来る。
										<br />
										github
										<Link
											href='https://github.com/your-username/issun-app'
											target='_blank'
											rel='noopener noreferrer'
											className='text-orange-500 hover:text-orange-600 underline'
										>
											View on GitHub
										</Link>
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Next.js
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Tailwind
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											firebase
										</span>
									</div>
								</div>
							</Link>

							{/* Website Work Item 2 */}
							<Link
								href='https://salon-murex.vercel.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/salon-site.png'
										alt='サロンサイト'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										salon
									</h3>
									<p className='text-gray-600 mb-4'>
										クライアントワークで作成した美容院のサイトのモック
										<br />
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											HTML
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											CSS
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Javascript
										</span>
									</div>
								</div>
							</Link>

							{/* Website Work Item 3 */}
							<Link
								href='https://issun-app.vercel.app/top'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/portfolio.png'
										alt='ポートフォリオサイト'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										Portfolio Website
									</h3>
									<p className='text-gray-600 mb-4'>
										A responsive portfolio website showcasing creative work with
										smooth animations and modern design principles.{" "}
										<Link
											href='https://github.com/your-username/portfolio-2025'
											target='_blank'
											rel='noopener noreferrer'
											className='text-orange-500 hover:text-orange-600 underline'
										>
											View on GitHub
										</Link>
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Next.js
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											TypeScript
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Framer Motion
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Design Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Design
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Design Work Item 1 */}
							<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/ISSUN_design.png'
										alt='ISSUN_figma'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										ISSUNデザインFigma
									</h3>
									<p className='text-gray-600 mb-4'>
										Complete brand identity package including logo design, color
										palette, typography, and brand guidelines for a tech
										startup.
									</p>
									<br />
									<Link
										href='https://www.figma.com/design/hhfRg0imlBFnSP16DglhcL/ISSUN?node-id=0-1&t=WUFd0Nb2bBIas5e4-1'
										target='_blank'
										rel='noopener noreferrer'
										className='text-orange-500 hover:text-orange-600 underline'
									>
										Figma
									</Link>

									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Adobe Illustrator
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Branding
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Logo Design
										</span>
									</div>
								</div>
							</div>

							{/* Design Work Item 2 */}
							<Link
								href='https://drive.google.com/file/d/11YdUTswrC71ez5_HVwrsZyBab37ucKLd/view'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/design-portfolio.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										訓練校でのデザインポートフォリオ
									</h3>
									<p className='text-gray-600 mb-4'>
										An ambient electronic track featuring atmospheric
										synthesizers and dreamy melodies, perfect for relaxation and
										meditation.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ableton Live
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Synthesizers
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ambient
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Music Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Music
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Music Work Item 1 */}
							<Link
								href='https://youtu.be/PugY1Abrzw0?si=aOt9YA7PlNj_o9Vd'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/NEHAN.png'
										alt='NEHAN'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										オリジナルソング"NEHAN de ochashite""
									</h3>
									<p className='text-gray-600 mb-4'>
										An ambient electronic track featuring atmospheric
										synthesizers and dreamy melodies, perfect for relaxation and
										meditation.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ableton Live
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Synthesizers
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ambient
										</span>
									</div>
								</div>
							</Link>

							{/* Music Work Item 2 */}
							<Link
								href='https://youtu.be/8kaESsP3sXg?si=jAtoh8RwxPpHiMFD'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/sungoi.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										企業案件"すんごい脳みそ""
									</h3>
									<p className='text-gray-600 mb-4'>
										An ambient electronic track featuring atmospheric
										synthesizers and dreamy melodies, perfect for relaxation and
										meditation.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ableton Live
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Synthesizers
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ambient
										</span>
									</div>
								</div>
							</Link>

							{/* Music Work Item 3 */}
							<Link
								href='https://youtu.be/PugY1Abrzw0?si=aOt9YA7PlNj_o9Vd'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/curry.png'
										alt='curry'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										オリジナルソング"Fuck'in spicy curry rice""
									</h3>
									<p className='text-gray-600 mb-4'>
										An ambient electronic track featuring atmospheric
										synthesizers and dreamy melodies, perfect for relaxation and
										meditation.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ableton Live
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Synthesizers
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Ambient
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* 3DCG Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							3DCG
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* 3DCG Work Item 1 */}
							<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/MYROOM.png'
										alt='3DCG'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										rooms
									</h3>
									<p className='text-gray-600 mb-4'>
										<Link
											href='https://first-threejs-roan.vercel.app/'
											target='_blank'
											rel='noopener noreferrer'
											className='text-orange-500 hover:text-orange-600 underline'
										>
											web site
										</Link>
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Blender
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Product Design
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Rendering
										</span>
									</div>
								</div>
							</div>

							{/* 3DCG Work Item 2 */}
							<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<span className='text-orange-600 font-semibold'>
										3D Render
									</span>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										Architectural Visualization
									</h3>
									<p className='text-gray-600 mb-4'>
										Realistic architectural renders for a residential project,
										featuring detailed interior and exterior views with natural
										lighting.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											3ds Max
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Architecture
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											V-Ray
										</span>
									</div>
								</div>
							</div>

							{/* 3DCG Work Item 3 */}
							<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<span className='text-orange-600 font-semibold'>
										3D Render
									</span>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										Character Animation
									</h3>
									<p className='text-gray-600 mb-4'>
										Animated 3D character for a short film project, including
										rigging, facial expressions, and walk cycle animations.
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Maya
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Animation
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Character Design
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT Section */}
			<section id='contact' className='py-16 bg-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							CONTACT
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>
					<div className='grid md:grid-cols-2 gap-12'>
						<div>
							<h3 className='text-2xl font-semibold text-gray-900 mb-6'>
								Get In Touch
							</h3>
							<p className='text-gray-600 mb-8'>
								I'm always interested in new opportunities and exciting
								projects. Feel free to reach out if you'd like to work together
								or just say hello!
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>📧</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>Email</p>
										<p className='text-gray-600'>hello@example.com</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>📱</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>Phone</p>
										<p className='text-gray-600'>+1 (555) 123-4567</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>📍</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>Location</p>
										<p className='text-gray-600'>Tokyo, Japan</p>
									</div>
								</div>
							</div>
						</div>
						<div className='bg-orange-50 p-8 rounded-lg'>
							<h4 className='text-xl font-semibold text-gray-900 mb-6'>
								Send a Message
							</h4>
							<form className='space-y-4'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Name
									</label>
									<input
										type='text'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='Your name'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Email
									</label>
									<input
										type='email'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='your@email.com'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Message
									</label>
									<textarea
										rows={4}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='Your message...'
									></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors'
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-8'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<p>&copy; 2025 Portfolio. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
