import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import useDataStore from '@/states/useDataStore';

interface Props {
  className?: string;
}

export default function CountBtn({ className }: Props) {
  const {clickCount, setClickCount} = useDataStore();

  return (
    <Button onClick={() => setClickCount()} className={cn('', className)}>
      Count is: {clickCount}

    </Button>
  );
}
