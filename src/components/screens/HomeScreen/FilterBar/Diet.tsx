'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { dietLabels } from '@/lib/recipes';

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.'
  })
});

export default function Diet() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['balanced', 'low-fat']
    }
  });

  const router = useRouter();
  const pathname = usePathname();

  const updateQueryParams = (diet: string[]) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (diet) {
      searchParams.set('diet', diet.join('_').toString());
    } else {
      searchParams.delete('diet');
    }

    const newPathname = `${pathname}?${searchParams}`;

    router.push(newPathname);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateQueryParams(data.items);
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='items'
          render={() => (
            <FormItem>
              {dietLabels.map((item) => (
                <FormField
                  key={item.parameter}
                  control={form.control}
                  name='items'
                  render={({ field }) => (
                    <FormItem key={item.parameter} className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.parameter)}
                          onCheckedChange={(checked) =>
                            checked
                              ? field.onChange([...field.value, item.parameter])
                              : field.onChange(field.value?.filter((value) => value !== item.parameter))
                          }
                        />
                      </FormControl>
                      <FormLabel className='font-normal'>{item.label}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
