import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Recipe } from '@/types/recipe.interface';

export default function Nutrition({ data }: { data: Recipe }) {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle className='text-xl font-medium'>Nutrition</CardTitle>
        <CardDescription>Total nutrients & daily value per serving </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className='h-[410px]'>
          {' '}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrient</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className='text-right'>Daily value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.digest.map(({ daily, label, total, unit }, i) => (
                <TableRow key={i}>
                  <TableCell className='font-medium'>{label}</TableCell>
                  <TableCell>
                    {Math.ceil(total)}
                    {unit}
                  </TableCell>
                  <TableCell className='text-right'>{Math.ceil(daily)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
