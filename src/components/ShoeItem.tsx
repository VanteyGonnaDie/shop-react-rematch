import React from 'react'

interface ShoeItemProps {}

const ShoeItem = React.memo((props: ShoeItemProps) => {
return (
<div>ShoeItem</div>
)
})

export default ShoeItem