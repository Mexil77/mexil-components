import { Meta, StoryObj } from '@storybook/react'
import MxCard from '.'
import { SizesArrKeys } from '../../enums'
import { MxCardHeader } from './MxCardHeader'

const meta = {
  title: 'Components/MxCard',
  component: MxCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'MxStory description',
      },
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    loading: Boolean,
    size: {
      options: SizesArrKeys,
      control: 'radio',
      table: {
        type: {
          summary: 'string',
          detail: SizesArrKeys.reduce(
            (acc: string, sizeKey: string) => `${acc}${sizeKey} \t|\n`,
            ''
          ),
        },
      },
    },
    children: {
      options: [
        <div
          style={{
            backgroundColor: '#fff',
            width: '100%',
          }}
        >
          <h2>Body title</h2>
          <p>Some description</p>
          <p>Some date: 2024/08/08</p>
        </div>,
      ],
      control: 'check',
      description:
        'Any React node may be used as a child. Check bellow to see the jsx has render in control example',
      table: {
        type: {
          summary: 'ReactNode',
          detail: 'Click on Show code to see the code example.',
        },
      },
    },
    header: {
      options: [<MxCardHeader label='Cart Title' />],
      control: 'check',
      description:
        'Any React Node of type MxCardHeader, cherck reference of that component in the description. Check bellow to see the jsx has render in control example',
      table: {
        type: {
          summary: 'ReactNode',
          detail: "<MxCardHeader label='Cart Title' />",
        },
      },
    },
  },
} satisfies Meta<typeof MxCard>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const BodyChildren: Story = {
  args: {
    children: (
      <div>
        <h2>Title body</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam
          cumque cum a provident voluptates nobis maxime, inventore voluptate
          facilis, tempora aperiam totam, ex dicta? Laboriosam aliquam ex
          provident odit perferendis iure dolorum eaque nulla. Consectetur odit
          architecto dolorum quas, veritatis quos sapiente fugit corporis
          inventore et tenetur minima voluptatum, nostrum reiciendis. Amet,
          reprehenderit totam! Est mollitia suscipit molestiae, deleniti
          necessitatibus officia dolores expedita, dicta earum vero beatae,
          corporis similique obcaecati neque quia consequatur consectetur error
          numquam libero natus provident veniam. Voluptatum nihil officia, eaque
          doloremque cupiditate quas suscipit magni expedita dignissimos vitae
          natus non excepturi voluptate reprehenderit corrupti asperiores
          repellendus, consequatur reiciendis eius aspernatur fuga? Aperiam, eum
          in! Nihil corrupti laborum cum quod! Molestias, repudiandae rem. Neque
          ipsam eius eum, hic temporibus praesentium optio nam amet at magnam
          perferendis, nemo odio aperiam deserunt molestias similique, laborum
          aspernatur. Illo, velit? Id exercitationem optio natus iure explicabo
          itaque pariatur voluptates ullam a nobis laborum, nihil maxime earum
          eaque distinctio dolores cumque dolor in voluptatem nulla expedita
          aperiam! Sequi error quam iste, aut consectetur, cupiditate harum quia
          esse aspernatur ipsa vel reiciendis, consequatur voluptates numquam
          ullam beatae labore praesentium pariatur quo! Voluptate sed assumenda
          recusandae vel corrupti eveniet ducimus adipisci labore ea!
        </p>
      </div>
    ),
    header: <MxCardHeader label='hola' />,
  },
}
