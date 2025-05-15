import { Text, type TextProps } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => {
  return (
    <Text padding="20px" fontSize="sm" color="fg.muted" {...props}>
      &copy; {new Date().getFullYear()} GLOBALECO SRL. All Rights Reserved.
    </Text>
  )
}
