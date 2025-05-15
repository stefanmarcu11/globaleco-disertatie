import { Card, CardBody, CardFooter, CardHeader, HStack, Heading, SimpleGrid, Tag, TagLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const MultipleCard = () => {
    return (
        <SimpleGrid spacing={4} columns={2} templateColumns='repeat(3, minmax(230px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>The collection of non-hazardous waste</Heading>
                </CardHeader>
                <CardBody>
                    <Text>The collection of non-hazardous waste involves the process of gathering and transporting
                        residual materials that do not pose a significant risk to human health or the environment.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>recycling</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>sanitation</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Hazardous waste collection</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Hazardous waste collection is a specialized process that deals with materials that can be toxic, flammable, reactive, or harmful to human health and the environment.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>safety</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>neutralization</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Wholesale trade of waste and scrap</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This activity involves the purchase, storage, and sale in large quantities of recyclable or reusable materials,
                        such as scrap iron, metals, paper, plastic, and other recoverable materials.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>valorization</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>reuse</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Road freight transport</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Road freight transport involves moving goods and materials between different locations using commercial vehicles such as trucks and vans.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>logistics</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>dispatch</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Transport of hazardous substances</Heading>
                </CardHeader>
                <CardBody>
                    <Text>The transport of hazardous substances involves the handling, loading, transportation,
                        and unloading of materials that may pose risks to human health, public safety, or the environment.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>compliance</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>safety</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Collection and treatment of other waste</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This activity involves the management of waste that does not fall into common categories (such as household or common industrial waste)
                        and requires special methods for collection, treatment, and disposal, in accordance with current regulations.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>sustainability</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>processing</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}