import React from 'react'

interface ButtonProps {}

const Button = React.memo((props: ButtonProps) => {
return (
<div>Button</div>
)
})

export default Button