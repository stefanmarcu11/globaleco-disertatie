import {Card, CardBody, CardFooter, CardHeader, HStack, Heading, SimpleGrid, Tag, TagLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const MultipleCard = () => {
    return (
        <SimpleGrid spacing={4} columns={2} templateColumns='repeat(3, minmax(230px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectarea deșeurilor nepericuloase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Colectarea deșeurilor nepericuloase implică procesul de strângere și transportare a materialelor
                        reziduale care nu reprezintă un risc semnificativ pentru sănătatea umană sau mediul înconjurător.
                        {/* Aceste deșeuri includ materiale biodegradabile, plastice, hârtie, carton, metal, sticlă, deșeuri din construcții și alte tipuri similare. */}
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>reciclare</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>salubritate</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectarea deșeurilor periculoase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Colectarea deșeurilor periculoase este un proces specializat care se ocupă de materiale ce pot fi toxice, inflamabile, reactive sau dăunătoare pentru sănătatea oamenilor și mediu.
                        {/* Exemple includ bateriile uzate, substanțele chimice industriale, vopseluri, solvenți, uleiuri uzate și echipamente electronice. */}
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>siguranță</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>neutralizare</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Comerț cu ridicata al deșeurilor și resturilor</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Această activitate implică achiziționarea, stocarea și vânzarea în cantități mari a materialelor reciclabile sau reutilizabile, precum fier vechi, metale, hârtie, plastic și alte materiale recuperabile.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            {/* <Avatar
                            src='https://bit.ly/sage-adebayo'
                            size='xs'
                            name='Segun Adebayo'
                            ml={-1}
                            mr={2}
                        /> */}
                            <TagLabel>valorificare</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            {/* <Avatar
                            src='https://bit.ly/sage-adebayo'
                            size='xs'
                            name='Segun Adebayo'
                            ml={-1}
                            mr={2}
                        /> */}
                            <TagLabel>reutilizare</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Transporturi rutiere de mărfuri</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Transportul rutier de mărfuri presupune mutarea produselor și materialelor între diferite locații utilizând vehicule comerciale, cum ar fi camioane și dube.
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>logistică</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>expediere</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Transporturi substanțe periculoase</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Activitatea de transport al substanțelor periculoase presupune manipularea, încărcarea, transportul și descărcarea materialelor care pot prezenta riscuri pentru sănătatea oamenilor, siguranța publică sau mediul înconjurător.
                        {/* Aceasta activitate este strict reglementată și necesită respectarea unor norme și proceduri specifice pentru a preveni accidentele sau incidentele periculoase. */}
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>conformitate</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>siguranță</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Colectare și tratare a altor reziduuri</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Această activitate implică gestionarea deșeurilor care nu intră în categoriile obișnuite (deșeuri menajere, industriale comune) și necesită metode speciale pentru colectare, tratare și eliminare, în conformitate cu reglementările în vigoare.
                        {/* Aceste activități sunt esențiale pentru protecția mediului și sănătatea publică, reducând riscurile asociate manipulării necorespunzătoare a acestor tipuri de reziduuri. */}
                    </Text>
                </CardBody>
                <CardFooter>
                    <HStack spacing={4}>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>sustenabilitate</TagLabel>
                        </Tag>
                        <Tag size='lg' colorScheme='green' borderRadius='full'>
                            <TagLabel>procesare</TagLabel>
                        </Tag>
                    </HStack>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}