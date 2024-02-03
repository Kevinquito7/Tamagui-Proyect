import type { CardProps } from 'tamagui'
import { Instagram, Pencil, Trash } from "@tamagui/lucide-icons";
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui'
import { InputsDemo } from './Create';

export function DemoCard(props: CardProps) {

  return (

    <Card elevate size="$4" bordered {...props}>

      <Card.Header padded>

        <H2>FILM1</H2>

        <Paragraph theme="alt2">Director</Paragraph>
        <Paragraph theme="alt2">Time</Paragraph>

      </Card.Header>

      <Card.Footer padded>

        <XStack flex={1} />

       <Button borderRadius="$10" icon={Pencil}></Button>
       <Button borderRadius="$10" icon={Trash}></Button>

      </Card.Footer>
    </Card>

  )

}

export function DemoCard1(props: CardProps) {

  return (

    <Card elevate size="$4" bordered {...props}>

      <Card.Header padded>

        <H2>FILM2</H2>

        <Paragraph theme="alt2">Director</Paragraph>
        <Paragraph theme="alt2">Time</Paragraph>

      </Card.Header>

      <Card.Footer padded>

        <XStack flex={1} />

        <Button borderRadius="$10" icon={Pencil}></Button>
       <Button borderRadius="$10" icon={Trash}></Button>

      </Card.Footer>
    </Card>

  )

}

export function DemoCard2(props: CardProps) {

  return (

    <Card elevate size="$4" bordered {...props}>

      <Card.Header padded>

        <H2>FILM3</H2>

        <Paragraph theme="alt2">Director</Paragraph>
        <Paragraph theme="alt2">Time</Paragraph>

      </Card.Header>

      <Card.Footer padded>

        <XStack flex={1} />

        <Button borderRadius="$10" icon={Pencil} ></Button>
        <Button borderRadius="$10" icon={Trash}></Button>

      </Card.Footer>
    </Card>

  )

}