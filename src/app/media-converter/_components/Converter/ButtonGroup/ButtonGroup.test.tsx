import { ButtonGroup } from '@/app/media-converter/_components/Converter/ButtonGroup/ButtonGroup'
import { useFormContext } from '@/hooks'
import { render, screen } from '@/test-utils'

jest.mock('@/hooks')

describe('ButtonGroup', () => {
  const mockUseFormContext = useFormContext as jest.Mock

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should disable the button when watchTargetFileExtension is undefined', () => {
    mockUseFormContext.mockReturnValue({ watch: () => undefined })

    render(<ButtonGroup />)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  it('should enable the button when watchTargetFileExtension is defined', () => {
    mockUseFormContext.mockReturnValue({ watch: () => 'mp3' })

    render(<ButtonGroup />)
    const button = screen.getByRole('button')

    expect(button).not.toBeDisabled()
  })
})
