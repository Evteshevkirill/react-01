import './SearchFilter.css'

export default function SearchFilter () {
  return (
		<div className='btn-group'>
			<button type='button' className='btn btn-info'>
				All
			</button>
			<button type='button' className='btn btn-outline-secondary'>
				Active
			</button>
			<button type='button' className='btn btn-outline-secondary'>
				Done
			</button>
		</div>
	)
}