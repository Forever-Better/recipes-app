import { recipesResponse } from '@/mocks/recipe';

export default function FilterBar() {
  return (
    <div>
      {/* <Select className='w-32' maxTagCount={0} mode='multiple' placeholder='Health Labels' showSearch={false}>
        {recipesResponse.hits[0].recipe.healthLabels.map((item) => (
          <Option label={item} value={item}>
            {item}
          </Option>
        ))}
      </Select> */}
    </div>
  );
}
