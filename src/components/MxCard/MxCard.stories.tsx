import { Meta, StoryObj } from '@storybook/react'
import { MxCard } from '.'
import { SizesArrKeys } from '../../enums'
import { MxCardHeader } from './MxCardHeader'
import { ComponentType } from 'react'

const meta = {
  title: 'Components/MxCard',
  component: MxCard,
  subcomponents: { MxCardHeader: MxCardHeader as ComponentType<unknown> },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'MxStory description',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: [
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #000',
          borderRadius: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '5px',
        }}
      >
        <div
          className='header'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <h2>Body title</h2>
          <p>24/08</p>
        </div>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>,
    ],
  },
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
        ' MxCardHeader, check reference of that component in the description. Check bellow to see the jsx has render in control example',
      table: {
        type: {
          summary: 'MxCardHeader',
          detail: "<MxCardHeader label='Cart Title' />",
        },
      },
    },
  },
} satisfies Meta<typeof MxCard>

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {
    header: [<MxCardHeader label='Cart Title' />],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const NoHeader: Story = {
  args: {},
}

export const LargerContent: Story = {
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
    header: <MxCardHeader label='Title' />,
  },
}
