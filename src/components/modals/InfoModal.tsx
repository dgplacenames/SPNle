import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Scottish place-name in 6 tries. After each guess, the colour of the tiles will
        change to show how close your guess was to the place-name. (English words are accepted as guesses.)
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="correct" />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the place-name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="K" />
        <Cell value="E" status="present" />
        <Cell value="O" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is in the place-name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="G" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter G is not in the place-name in any spot.
      </p>
    <p>&nbsp;</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Never heard of the place? {' '}
        <a
          href="https://geo.nls.uk/maps/gb1900/#zoom=6&lat=55.0000&lon=-2.5000&layer=0"
          className="underline font-bold"
        >
          Click here and type in the answer to see it on the map.
        </a>{' '}
      </p>
      <p>&nbsp;</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of Wordle. {' '}
        <a
          href="https://github.com/dgplacenames/DnG-le"
          className="underline font-bold"
        >
          Click here for the code and credits.
        </a>{' '}
      </p>
      <p>&nbsp;</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {' '}
        <a
          href="https://twitter.com/dgplacenames"
          className="underline font-bold"
        >
          @dgplacenames
        </a>{' '}
      </p>
    </BaseModal>
  )
}
